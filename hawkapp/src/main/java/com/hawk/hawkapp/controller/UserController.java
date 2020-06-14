package com.hawk.hawkapp.controller;

import com.hawk.hawkapp.controller.dto.BlockadeDTO;
import com.hawk.hawkapp.model.User;
import com.hawk.hawkapp.service.intf.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;

import java.net.URI;

@RestController
@CrossOrigin(maxAge = 3600)
@RequestMapping("/user")
public class UserController {

    @Autowired
    private UserService userService;

    @Autowired
    PasswordEncoder encoder;


    @GetMapping(value = "/{id}")
    User findById(@PathVariable("id") Long id) {
        return userService.findById(id);
    }

    @DeleteMapping(value = "/{id}")
    @ResponseStatus(HttpStatus.OK)
    public void delete(@PathVariable("id") Long id) {
        userService.delete(id);
    }

    @PatchMapping(value = "/{id}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void updateBlockade(@RequestBody BlockadeDTO blockadeDTO,
                               @PathVariable("id") Long id) {
        User userById = userService.findById(id);

        userById.setIsBlocked(blockadeDTO.getIsBlocked());

        userService.update(userById, id);
    }

    @PutMapping(value = "/{id}")
    public ResponseEntity<Void> update(@RequestBody User user,
                                       @PathVariable("id") Long id) {
        User userById = userService.findById(id);

        if (userById == null) {
            userService.add(user);
            user.setPassword(encoder.encode(user.getPassword()));
            return ResponseEntity.created(URI.create(String.format("/user/%d", id))).build();
        }

        user.setPassword(encoder.encode(user.getPassword()));
        userService.update(user, id);
        return ResponseEntity.noContent().build();
    }
}

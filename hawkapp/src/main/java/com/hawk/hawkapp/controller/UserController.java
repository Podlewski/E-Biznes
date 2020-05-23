package com.hawk.hawkapp.controller;

import com.hawk.hawkapp.controller.dto.BlockadeDTO;
import com.hawk.hawkapp.model.User;
import com.hawk.hawkapp.service.intf.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/user")
public class UserController {

    @Autowired
    private UserService userService;

    @GetMapping(value = "/{id}")
    User findById(@PathVariable("id") Long id) {
        return userService.findById(id);
    }

    @DeleteMapping(value = "/{id}")
    @ResponseStatus(HttpStatus.OK)
    public void delete(@PathVariable("id") Long id) {
        userService.delete(id);
    }

    @PostMapping(value = "")
    @ResponseStatus(HttpStatus.CREATED)
    public User add(@RequestBody User user) {
        return userService.add(user);
    }

    @PatchMapping(value = "/{id}")
    @ResponseStatus(HttpStatus.CREATED)
    public User add(@RequestBody BlockadeDTO blockadeDTO,
                    @PathVariable("id") Long id) {
        User user = userService.findById(id);

        user.setIsBlocked(blockadeDTO.getIsBlocked());

        return userService.update(user, id);
    }
}

package com.hawk.hawkapp.service.impl;

import com.hawk.hawkapp.model.BaseEntity;
import com.hawk.hawkapp.service.intf.BaseService;
import org.springframework.data.jpa.repository.JpaRepository;

import javax.persistence.EntityNotFoundException;
import java.util.List;

public abstract class BaseServiceImpl<TRepository extends JpaRepository<TModel, Long>, TModel extends BaseEntity>
        implements BaseService<TModel> {

    TRepository repository;

    BaseServiceImpl(TRepository repository) {
        this.repository = repository;
    }

    @Override
    public List<TModel> findAll() {
        return repository.findAll();
    }

    @Override
    public TModel findById(Long id) {
        return repository.findById(id)
                .orElseThrow(EntityNotFoundException::new);
    }

    @Override
    public TModel add(TModel obj) {
        return repository.save(obj);
    }

    @Override
    public TModel update(TModel obj, Long id) {
        repository.findById(id)
                .orElseThrow(EntityNotFoundException::new);

        obj.setId(id);

        return repository.save(obj);
    }

    @Override
    public void delete(Long id) {
        if (!repository.existsById(id)) {
            throw new EntityNotFoundException();
        }

        repository.deleteById(id);
    }
}

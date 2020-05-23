package com.hawk.hawkapp.service.intf;

import java.util.List;

public interface BaseService<TModel> {

    List<TModel> findAll();

    TModel findById(Long id);

    TModel add(TModel obj);

    TModel update(TModel obj, Long id);

    void delete(Long id);
}

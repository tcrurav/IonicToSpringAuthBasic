package com.tiburcio.people.entity.dao;

import org.springframework.data.repository.CrudRepository;

import com.tiburcio.people.entity.models.Person;

public interface IPersonDao extends CrudRepository<Person, Long>{

}

package com.tiburcio.people.entity.services;

import java.util.List;

import com.tiburcio.people.entity.models.Person;

public interface IPersonService {
	public Person findById(long id);
	public List<Person> findAll();
	public void save(Person person);
	public void deleteById(long id);
	public void update(Person person, long id);
}

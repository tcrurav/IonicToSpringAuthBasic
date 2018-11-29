package com.tiburcio.people.entity.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.tiburcio.people.entity.dao.IPersonDao;
import com.tiburcio.people.entity.models.Person;

@Service
public class PersonServiceImpl implements IPersonService{

	@Autowired
	private IPersonDao personDao;
	
	@Override
	public Person findById(long id) {
		return personDao.findById(id).get();
	}

	@Override
	public List<Person> findAll() {
		return (List<Person>) personDao.findAll();
	}

	@Override
	public void save(Person person) {
		personDao.save(person);
	}

	@Override
	public void deleteById(long id) {
		personDao.deleteById(id);
	}

	@Override
	public void update(Person person, long id) {
		personDao.findById(id).ifPresent((x) -> {
			person.setId(id);
			personDao.save(person);
		});
	}

}

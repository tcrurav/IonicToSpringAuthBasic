package com.tiburcio.people.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RestController;

import com.tiburcio.people.entity.models.Person;
import com.tiburcio.people.entity.services.IPersonService;

@CrossOrigin(origins = {"http://localhost:8100", "http://localhost:8080"})
@RestController
public class PersonController {
	@Autowired
	private IPersonService personService;
	
	@GetMapping("/persons")
	public List<Person> getAll(){
		return personService.findAll();
	}
	
	@GetMapping("/person/{id}")
	public Person getById(@PathVariable(value = "id") long id) {
		return personService.findById(id);
	}
	
	@PostMapping("/person")
	public void save(Person person) {
		personService.save(person);
	}
		
	@PutMapping("/person/{id}")
	public void update(Person person, @PathVariable(value = "id") long id) {
		personService.update(person, id);
	}
	
	@DeleteMapping("/person/{id}")
	public void delete(@PathVariable(value = "id") long id) {
		personService.deleteById(id);
	}
}

package com.projeto.consultorio.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.projeto.consultorio.model.Doctors;
import com.projeto.consultorio.repository.DoctorRepository;

@RestController("doctors")
public class DoctorController {

	@Autowired
	DoctorRepository repository;	
    
	@PostMapping("api/doctors")
    public Doctors save(@RequestBody Doctors doctor){
		return repository.save(doctor);
    }
	
	@PutMapping("api/doctors/{id}")
    public Doctors update(@PathVariable("id") int id, @RequestBody Doctors doctor){
		doctor.setId(id);
		return repository.save(doctor);
    }
	
	@DeleteMapping("api/doctors/{id}")
    public boolean delete(@PathVariable("id") int id){
		try {
			repository.deleteById(id);
			return true;
		} catch (Exception e) {
			return false;
		}
    }
	@GetMapping("api/doctors")
    public List<Doctors> all() {
    	return (List<Doctors>) repository.findAll();
    }	
	//?id=2
	@GetMapping("api/doctors/{id}")
    public Optional<Doctors> getId(@PathVariable("id") int id) {
    	return repository.findById(id);
    }
}

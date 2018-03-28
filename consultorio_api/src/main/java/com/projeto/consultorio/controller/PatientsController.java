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

import com.projeto.consultorio.model.Patients;
import com.projeto.consultorio.repository.PatientRepository;

@RestController("patients")
public class PatientsController {

	@Autowired
	PatientRepository repository;	
    
	@PostMapping("api/patients")
    public Patients save(@RequestBody Patients patients){
		return repository.save(patients);
    }
	
	@PutMapping("api/patients/{id}")
    public Patients update(@PathVariable("id") int id, @RequestBody Patients patients){
		patients.setId(id);
		return repository.save(patients);
    }
	
	@DeleteMapping("api/patients/{id}")
    public boolean delete(@PathVariable("id") int id){
		try {
			repository.deleteById(id);
			return true;
		} catch (Exception e) {
			return false;
		}
    }
	@GetMapping("api/patients")
    public List<Patients> all() {
    	return (List<Patients>) repository.findAll();
    }	
	//?id=2
	@GetMapping("api/patients/{id}")
    public Optional<Patients> getId(@PathVariable("id") int id) {
    	return repository.findById(id);
    }
}

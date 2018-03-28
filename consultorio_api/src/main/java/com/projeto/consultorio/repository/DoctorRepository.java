package com.projeto.consultorio.repository;

import org.springframework.data.repository.CrudRepository;

import com.projeto.consultorio.model.Doctors;

public interface DoctorRepository extends CrudRepository<Doctors, Integer> {

}

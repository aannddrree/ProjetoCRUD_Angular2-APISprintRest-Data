package com.projeto.consultorio.repository;

import org.springframework.data.repository.CrudRepository;

import com.projeto.consultorio.model.Patients;

public interface PatientRepository extends CrudRepository<Patients, Integer> {

}

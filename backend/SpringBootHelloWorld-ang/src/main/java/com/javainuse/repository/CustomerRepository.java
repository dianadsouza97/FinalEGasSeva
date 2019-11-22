package com.javainuse.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.javainuse.model.Employee;
@Repository
public interface CustomerRepository extends JpaRepository<Employee, String> {

}

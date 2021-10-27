package com.example.postgresdemo.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "employees")
public class Employee {

    private long id;
    private String firstname;
    private String lastname;
    private String role;
    private String email;
 
    public Employee() {
  
    }
 
    public Employee(String firstname, String lastname, String role, String email) {
         this.firstname = firstname;
         this.lastname = lastname;
         this.role = role;
         this.email = email;
    }
 
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
        public long getId() {
        return id;
    }
    public void setId(long id) {
        this.id = id;
    }
 
     @Column(name = "afirstname", nullable = false)
     public String getFirstName() {
         return firstname;
     }
     public void setFirstName(String firstname) {
         this.firstname = firstname;
     }
 
    @Column(name = "blastname")
    public String getLastName() {
        return lastname;
    }
    public void setLastName(String lastname) {
        this.lastname = lastname;
    }

    @Column(name = "role", nullable = false)
    public String getRole() {
        return role;
    }
    public void setRole(String role) {
        this.role = role;
    }
 
    @Column(name = "email", nullable = false)
    public String getEmail() {
        return email;
    }
    public void setEmail(String email) {
        this.email = email;
    }

    @Override
    public String toString() {
        return "Employee [id= " + id + ", firstname= " + firstname + ", lastname= " + lastname + ", role= " + role + ", email= " + email
       + "]";
    }
 
}
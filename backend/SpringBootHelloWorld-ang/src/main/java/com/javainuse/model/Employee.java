package com.javainuse.model;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

import lombok.Getter;
import lombok.Setter;

@Table(name="customer")
@Entity
@Getter
@Setter
public class Employee {
	@Id 
	private String email;
	private String name;

	private String contact;
	private int zipcode;
	private String city;
	private String state;
	private String country;
	private String agency;
	private String password;
	
	
	
	


	/*
	 * @Override public int hashCode() { final int prime = 31; int result = 1;
	 * result = prime * result + ((designation == null) ? 0 :
	 * designation.hashCode()); result = prime * result + ((empId == null) ? 0 :
	 * empId.hashCode()); result = prime * result + ((name == null) ? 0 :
	 * name.hashCode()); long temp; temp = Double.doubleToLongBits(salary); result =
	 * prime * result + (int) (temp ^ (temp >>> 32)); return result; }
	 */

	/*
	 * @Override public boolean equals(Object obj) { if (this == obj) return true;
	 * if (obj == null) return false; if (getClass() != obj.getClass()) return
	 * false; Employee other = (Employee) obj; if (designation == null) { if
	 * (other.designation != null) return false; } else if
	 * (!designation.equals(other.designation)) return false; if (empId == null) {
	 * if (other.empId != null) return false; } else if (!empId.equals(other.empId))
	 * return false; if (name == null) { if (other.name != null) return false; }
	 * else if (!name.equals(other.name)) return false; if
	 * (Double.doubleToLongBits(salary) != Double.doubleToLongBits(other.salary))
	 * return false; return true; }
	 */

}

package com.familytree.beans;

import java.io.Serializable;
import java.lang.reflect.Field;
import java.util.ArrayList;

import javax.persistence.Id;

import antlr.collections.List;

public abstract class GenericBean implements Serializable {

	/**
	 * 
	 */
	protected static final long serialVersionUID = 1L;
	@Override
	public abstract String toString();
	public abstract void update(GenericBean bean);
	public abstract boolean hasRequired();
	@Id
	protected Integer id;

	public GenericBean() {
		super();
	}
	public GenericBean(Integer id) {
		super();
		this.id = id;
	}
	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}
	
	public void nullifyAllFields() throws IllegalArgumentException, IllegalAccessException {
	    for ( Field f : this.getClass().getDeclaredFields()) {
	        f.setAccessible(true);
	        if(f.getType().equals(List.class))
	        	f.set(this, new ArrayList<User>());
	        else if (f.getType().equals(String.class)) {
	        	f.set(this, "");
	        }else
	        	f.set(this, null);
	    }

	}
}

package com.familytree.beans;

public abstract class GenericBean {

	public abstract void update(GenericBean bean);
	public abstract boolean hasRequired();
	
	protected Integer id;

	public GenericBean() {
		super();
	}

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}
	@Override
	public String toString() {
		return "GenericBean [id=" + id + "]";
	}
	
}

import React from "react";

function CarForm(props) {
  return (
    <form onSubmit={props.onSubmit}>
      <div className="form-group">
        <label htmlFor="name">Name</label>
        <div className="field">
          <input
            id="name"
            type="text"
            name="name"
            onChange={props.onChange}
            className="form-control"
            value={props.car.name}
            error={props.errors.name}
          />
        </div>
        {props.errors.name && <div className="alert alert-danger">{props.errors.name}</div>}
      </div>
      <div className="form-group">
        <label htmlFor="model">Model</label>
        <div className="field">
          <input
            id="model"
            type="text"
            name="model"
            onChange={props.onChange}
            className="form-control"
            value={props.car.model}
            error={props.errors.model}
          />
        </div>
        {props.errors.model && <div className="alert alert-danger">{props.errors.model}</div>}
      </div>
      <div className="form-group">
        <label htmlFor="year">Year</label>
        <div className="field">
          <input
            id="year"
            type="text"
            name="year"
            onChange={props.onChange}
            className="form-control"
            value={props.car.year}
            error={props.errors.year}
          />
        </div>
        {props.errors.year && <div className="alert alert-danger">{props.errors.year}</div>}
      </div>
      <div className="form-group">
        <label htmlFor="price">Price</label>
        <div className="field">
          <input
            id="price"
            type="text"
            name="price"
            onChange={props.onChange}
            className="form-control"
            value={props.car.price}
            error={props.errors.price}
          />
        </div>
        {props.errors.price && <div className="alert alert-danger">{props.errors.price}</div>}
      </div>

      <input type="submit" value="Save" className="btn btn-primary" />
    </form>
  );
}

export default CarForm;

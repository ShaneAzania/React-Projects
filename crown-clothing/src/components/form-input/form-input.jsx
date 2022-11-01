import "./form-input.scss";

const FormInput = ({ label, ...inputProps }) => {
	return (
		<div className="group mb-3">
			{label ? (
				<label className={`form-input-label ${inputProps.value.length ? "shrink" : null}`}>{label}</label>
			) : null}
			<input className="form-input" required {...inputProps} />
		</div>
	);
};

export default FormInput;

// <FormInput label="Password" name="password" onChange={handleChange} placeholder="" type="password" value={password} />;

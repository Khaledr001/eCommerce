import { useState } from "react";
import userServices from "../../services/userServices";
import { useFormik } from "formik";
import usrEdit from "../../schemas/userEdit";

const ChangePassword = () => {
  const [showPassword, setShowPassword] = useState(false);

  const {
    values,
    touched,
    errors,
    handleChange,
    handleSubmit,
  } = useFormik({
    initialValues: {

    },
    validationSchema: usrEdit.ChangePasswordSchema,
    onSubmit: async (values) => {
      console.log(values);
      // mutate(values);
    },
  });

  return (
    <div className="accountsettings">
      <h1 className="mainhead1">Change Password</h1>

      <form className="form">
        <div className="form-group">
          <label htmlFor="oldpass">
            Old Password <span>*</span>
          </label>
          <input
            required
            name="oldPassword"
            value={values.oldPassword}
            onChange={handleChange}
            className="text-black"
            type={showPassword ? "text" : "password"}
          />
          {touched.oldPassword && errors.oldPassword ? (
            <p className="text-error text-sm ms-2 mt-1">{errors.oldPassword}</p>
          ) : null}
        </div>

        <div className="form-group">
          <label htmlFor="newpass">
            New Password <span>*</span>
          </label>
          <input
            required
            name="newPassword"
            value={values.newPassword}
            onChange={handleChange}
            className="text-black"
            type={showPassword ? "text" : "password"}
          />
          {touched.newPassword && errors.newPassword ? (
            <p className="text-error text-sm ms-2 mt-1">{errors.newPassword}</p>
          ) : null}
        </div>

        <div className="form-group">
          <label htmlFor="newpass">
            Confirm New Password <span>*</span>
          </label>
          <input
            required
            name="confirmPassword"
            value={values.confirmPassword}
            onChange={handleChange}
            className="text-black"
            type={showPassword ? "text" : "password"}
          />
          {touched.confirmPassword && errors.confirmPassword ? (
            <p className="text-error text-sm ms-2 mt-1">
              {errors.confirmPassword}
            </p>
          ) : null}
        </div>
      </form>

      <div className="form-control">
        <label className="cursor-pointer label">
          <input
            type="checkbox"
            className="checkbox checkbox-error"
            onClick={() => {
              setShowPassword(!showPassword);
            }}
          />
          <span className="text-xl ms-3">Show Password</span>
        </label>
      </div>

      <button onClick={handleSubmit} className="btn mt-5 bg-success">
        Save Changes
      </button>
    </div>
  );
};

export default ChangePassword;

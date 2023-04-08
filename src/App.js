import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
export default function App() {
  const [sum, setsum] = useState("");
  const formik = useFormik({
    // Khởi tạo dữ liệu
    initialValues: {
      soA: "",
      soB: "",
    },
    // Kiểm tra dữ liệu
    validationSchema: Yup.object({
      soA: Yup.number()
        .typeError("Vui lòng nhập dữ liệu")
        .required("Vui lòng nhập 1 con số"),
      soB: Yup.number()
        .typeError("Vui lòng nhập dữ liệu")
        .required("Vui lòng nhập 1 con số"),
    }),
    // Khi submit
    onSubmit: (value) => {
      setsum(value.soA + value.soB);
    },
  });
  return (
    <>
      <div className="container">
        <form onSubmit={formik.handleSubmit}>
          <div className="form-group">
            Số a :{" "}
            <input
              className="form-control"
              type="number"
              name="soA"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.soA}
            />
            {formik.errors.soA && formik.touched.soA ? (
              <div className="text-danger">{formik.errors.soA}</div>
            ) : null}
          </div>
          <div className="form-group">
            Số b :{" "}
            <input
              className="form-control"
              type="number"
              name="soB"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.soB}
            />
            {formik.errors.soB && formik.touched.soB ? (
              <div className="text-danger">{formik.errors.soB}</div>
            ) : null}
          </div>
          <div className="form-group">Tổng: {sum}</div>
          <button className="btn btn-primary">Tính tổng</button>
        </form>
      </div>
    </>
  );
}

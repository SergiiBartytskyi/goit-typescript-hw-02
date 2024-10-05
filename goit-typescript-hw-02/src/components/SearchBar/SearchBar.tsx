import { forwardRef } from "react";
import { Formik, Form, Field } from "formik";
import toast, { Toaster } from "react-hot-toast";
import css from "./SearchBar.module.css";

const SearchBar = forwardRef(function SearchBarComponent({ onSearch }, ref) {
  const handleSubmit = (values, actions) => {
    if (!values.query) {
      toast.error("Enter a query before!");
      return;
    }
    onSearch(values.query);

    actions.resetForm();
  };

  return (
    <header className={css.container} ref={ref}>
      <Formik initialValues={{ query: "" }} onSubmit={handleSubmit}>
        <Form className={css.wraper}>
          <Field
            type="text"
            name="query"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            className={css.input}
          />

          <Toaster position="top-right" reverseOrder={false} />

          <button type="submit">Submit</button>
        </Form>
      </Formik>
    </header>
  );
});

export default SearchBar;

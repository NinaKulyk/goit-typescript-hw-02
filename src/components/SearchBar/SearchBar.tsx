import toast, { Toaster } from "react-hot-toast";
import s from "./SearchBar.module.css";
import { Formik, Form, Field, ErrorMessage, FormikHelpers } from "formik";
import { FormValues, SearchBarProps } from "../App/App.types";

const SearchBar: React.FC<SearchBarProps> = ({ setQuery }) => {
  const initialValues: FormValues = {
    query: "",
  };

  const notify = () => toast.error("You need to enter the value!");

  const handleSubmit = (
    values: FormValues,
    actions: FormikHelpers<FormValues>
  ) => {
    if (values.query.trim() === "") {
      notify();
      actions.resetForm();
      return;
    }
    setQuery(values.query);
    actions.resetForm();
  };

  return (
    <>
      <header className={s.header}>
        <Formik initialValues={initialValues} onSubmit={handleSubmit}>
          <Form className={s.form}>
            <Field
              className={s.input}
              name="query"
              placeholder="Search images and photos"
              type="search"
            ></Field>
            <button type="submit">
              <span>Search</span>
            </button>
          </Form>
        </Formik>
        <Toaster />
      </header>
    </>
  );
};

export default SearchBar;

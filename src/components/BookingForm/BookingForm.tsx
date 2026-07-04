// BookingForm: camper booking request form on the camper details page.
"use client";

import { useState, type ChangeEvent, type FormEvent } from "react";
import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { TbExclamationCircleFilled } from "react-icons/tb";
import { createBookingRequest } from "@/services/campers";
import Spinner from "@/components/Spinner/Spinner";
import styles from "./BookingForm.module.css";

interface BookingFormProps {
  camperId: string;
}

interface BookingFormErrors {
  name?: string;
  email?: string;
}

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const BookingForm = ({ camperId }: BookingFormProps) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [errors, setErrors] = useState<BookingFormErrors>({});

  const mutation = useMutation({
    mutationFn: () => createBookingRequest(camperId, { name, email }),
    onSuccess: (data) => {
      toast.success(data.message);
      setName("");
      setEmail("");
      setErrors({});
    },
    onError: () => {
      toast.error("Something went wrong. Please try again.");
    },
  });

  const handleNameChange = (event: ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
    if (errors.name) setErrors((prev) => ({ ...prev, name: undefined }));
  };

  const handleEmailChange = (event: ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
    if (errors.email) setErrors((prev) => ({ ...prev, email: undefined }));
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const nextErrors: BookingFormErrors = {};
    if (name.trim() === "") {
      nextErrors.name = "Please enter your full name.";
    }
    if (email.trim() === "") {
      nextErrors.email = "Please enter your email address.";
    } else if (!EMAIL_PATTERN.test(email)) {
      nextErrors.email = "Please enter a valid email address.";
    }

    if (Object.keys(nextErrors).length > 0) {
      setErrors(nextErrors);
      return;
    }

    setErrors({});
    mutation.mutate();
  };

  return (
    <div className={styles.wrapper}>
      <h2 className={styles.title}>Book your campervan now</h2>
      <p className={styles.subtitle}>
        Stay connected! We are always ready to help you.
      </p>

      <form className={styles.form} onSubmit={handleSubmit} noValidate>
        <div className={styles.inputGroup}>
          <div className={styles.fieldWrapper}>
            <input
              className={`${styles.input} ${errors.name ? styles.inputError : ""}`}
              type="text"
              placeholder="Name*"
              value={name}
              onChange={handleNameChange}
            />
            {errors.name && (
              <>
                <TbExclamationCircleFilled className={styles.errorIcon} />
                <p className={styles.errorText}>{errors.name}</p>
              </>
            )}
          </div>
          <div className={styles.fieldWrapper}>
            <input
              className={`${styles.input} ${errors.email ? styles.inputError : ""}`}
              type="email"
              placeholder="Email*"
              value={email}
              onChange={handleEmailChange}
            />
            {errors.email && (
              <>
                <TbExclamationCircleFilled className={styles.errorIcon} />
                <p className={styles.errorText}>{errors.email}</p>
              </>
            )}
          </div>
        </div>
        <button
          type="submit"
          className={styles.submitButton}
          disabled={mutation.isPending}
        >
          {mutation.isPending ? <Spinner /> : "Send"}
        </button>
      </form>
    </div>
  );
};

export default BookingForm;

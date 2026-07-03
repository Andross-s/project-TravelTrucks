// BookingForm: camper booking request form on the camper details page.
"use client";

import { useState, type FormEvent } from "react";
import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { createBookingRequest } from "@/services/campers";
import Spinner from "@/components/Spinner/Spinner";
import styles from "./BookingForm.module.css";

interface BookingFormProps {
  camperId: string;
}

const BookingForm = ({ camperId }: BookingFormProps) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const mutation = useMutation({
    mutationFn: () => createBookingRequest(camperId, { name, email }),
    onSuccess: () => {
      toast.success("Booking request sent successfully!");
      setName("");
      setEmail("");
    },
    onError: () => {
      toast.error("Something went wrong. Please try again.");
    },
  });

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    mutation.mutate();
  };

  return (
    <div className={styles.wrapper}>
      <h2 className={styles.title}>Book your campervan now</h2>
      <p className={styles.subtitle}>
        Stay connected! We are always ready to help you.
      </p>

      <form className={styles.form} onSubmit={handleSubmit}>
        <div className={styles.inputGroup}>
          <input
            className={styles.input}
            type="text"
            placeholder="Name*"
            required
            value={name}
            onChange={(event) => setName(event.target.value)}
          />
          <input
            className={styles.input}
            type="email"
            placeholder="Email*"
            required
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
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

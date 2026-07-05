// Filters: catalog filter form (location, vehicle type, equipment).
"use client";

import { useState, type FormEvent } from "react";
import { useQuery } from "@tanstack/react-query";
import { getCampersFilters } from "@/services/campers";
import type { CampersFilters } from "@/types/camper";
import { formatLabel } from "@/utils/formatLabel";
import Spinner from "@/components/Spinner/Spinner";
import styles from "./Filters.module.css";

interface FiltersProps {
  onApply: (filters: CampersFilters) => void;
  isLoading?: boolean;
}

const Filters = ({ onApply, isLoading }: FiltersProps) => {
  const { data, isError } = useQuery({
    queryKey: ["campersFilters"],
    queryFn: getCampersFilters,
  });

  const [location, setLocation] = useState("");
  const [form, setForm] = useState("");
  const [engine, setEngine] = useState("");
  const [transmission, setTransmission] = useState("");

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onApply({
      location: location || undefined,
      form: form || undefined,
      engine: engine || undefined,
      transmission: transmission || undefined,
    });
  };

  const handleClear = () => {
    setLocation("");
    setForm("");
    setEngine("");
    setTransmission("");
    onApply({});
  };

  return (
    <form className={styles.filters} onSubmit={handleSubmit}>
      <div className={styles.field}>
        <label className={styles.label} htmlFor="location">
          Location
        </label>
        <div className={styles.locationInputWrapper}>
          <img
            className={styles.locationIcon}
            src="/campersImage/map.svg"
            alt=""
          />
          <input
            id="location"
            className={styles.locationInput}
            type="text"
            placeholder="Ukraine, Kyiv"
            value={location}
            onChange={(event) => setLocation(event.target.value)}
          />
        </div>
      </div>

      <div className={styles.filtersWrapper}>
        <h2 className={styles.filtersTitle}>Filters</h2>
        {isError && (
          <p className={styles.errorText}>
            Something went wrong while loading filter options.
          </p>
        )}
        <fieldset className={styles.fieldset}>
          <legend className={styles.legend}>Camper form</legend>
          {data?.forms.map((value) => (
            <label key={value} className={styles.radioLabel}>
              <input
                type="radio"
                name="form"
                value={value}
                checked={form === value}
                onChange={(event) => setForm(event.target.value)}
                className={styles.radio}
              />
              {formatLabel(value)}
            </label>
          ))}
        </fieldset>

        <fieldset className={styles.fieldset}>
          <legend className={styles.legend}>Engine</legend>
          {data?.engines.map((value) => (
            <label key={value} className={styles.radioLabel}>
              <input
                type="radio"
                name="engine"
                value={value}
                checked={engine === value}
                onChange={(event) => setEngine(event.target.value)}
                className={styles.radio}
              />
              {formatLabel(value)}
            </label>
          ))}
        </fieldset>

        <fieldset className={styles.fieldset}>
          <legend className={styles.legend}>Transmission</legend>
          {data?.transmissions.map((value) => (
            <label key={value} className={styles.radioLabel}>
              <input
                type="radio"
                name="transmission"
                value={value}
                checked={transmission === value}
                onChange={(event) => setTransmission(event.target.value)}
                className={styles.radio}
              />
              {formatLabel(value)}
            </label>
          ))}
        </fieldset>
      </div>

      <button
        type="submit"
        className={styles.searchButton}
        disabled={isLoading}
      >
        {isLoading ? <Spinner /> : "Search"}
      </button>
      <button
        type="button"
        className={styles.clearButton}
        onClick={handleClear}
      >
        <img className={styles.clearIcon} src="/campersImage/close.svg" alt="" />
        Clear filters
      </button>
    </form>
  );
};

export default Filters;

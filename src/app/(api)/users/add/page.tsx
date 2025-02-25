"use client";
import { useFormik } from "formik";
import { useStore } from "@/state/store";
import { useQuery } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function () {
  const router = useRouter();
  const { users, getAllUsers, addUser } = useStore();

  useQuery({
    queryKey: ["users"],
    queryFn: getAllUsers,
  });

  const userId = users?.length + 1;

  const formik = useFormik({
    initialValues: {
      id: userId,
      username: "",
      email: "",
      address: {
        street: "",
        city: "",
        suite: "",
        zipcode: "",
        geo: {
          lat: "",
          lng: "",
        },
      },
      company: {
        name: "",
        catchPhrase: "",
      },
    },
    onSubmit: async (values) => {
      const formData = new FormData();
      formData.append("id", values.id.toString());
      formData.append("username", values.username);
      formData.append("email", values.email);
      formData.append("address[street]", values.address.street);
      formData.append("address[city]", values.address.city);
      formData.append("address[suite]", values.address.suite);
      formData.append("address[zipcode]", values.address.zipcode);
      formData.append("address[geo][lat]", values.address.geo.lat);
      formData.append("address[geo][lng]", values.address.geo.lng);
      formData.append("company[name]", values.company.name);
      formData.append("company[catchPhrase]", values.company.catchPhrase);

      await addUser(formData);
      router.push("/users");
    },
  });

  console.log(formik.values);

  return (
    <form
      onSubmit={formik.handleSubmit}
      className="flex w-full h-full items-center justify-center"
    >
      <div className="flex flex-col justify-center w-full h-full p-4 md:w-[32rem]">
        <h3 className="mb-1 text-2xl font-semibold">User Details</h3>

        <div className="flex flex-col mb-1">
          <label
            htmlFor="username"
            className="text-sm font-medium text-black md:text-base"
          >
            User name
          </label>
          <input
            type="text"
            name="username"
            id="username"
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            value={formik.values.username}
            className="p-2 text-sm border-b border-gray-700 rounded-sm md:text-base placeholder:text-gray-700"
          />
        </div>

        <div className="flex flex-col mb-1">
          <label
            htmlFor="email"
            className="text-sm font-medium text-black md:text-base"
          >
            Email
          </label>
          <input
            type="text"
            name="email"
            id="email"
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            value={formik.values.email}
            className="p-2 text-sm border-b border-gray-700 rounded-sm md:text-base placeholder:text-gray-700"
          />
        </div>

        <div className="flex flex-col mb-1">
          <label
            htmlFor="street"
            className="text-sm font-medium text-black md:text-base"
          >
            Street
          </label>
          <input
            type="text"
            name="address[street]"
            id="address[street]"
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            value={formik.values.address.street}
            className="p-2 text-sm border-b border-gray-700 rounded-sm md:text-base placeholder:text-gray-700"
          />
        </div>

        <div className="flex flex-col mb-1">
          <label
            htmlFor="city"
            className="text-sm font-medium text-black md:text-base"
          >
            City
          </label>
          <input
            type="text"
            name="address[city]"
            id="address[city]"
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            value={formik.values.address.city}
            className="p-2 text-sm border-b border-gray-700 rounded-sm md:text-base placeholder:text-gray-700"
          />
        </div>

        <div className="flex flex-col mb-1">
          <label
            htmlFor="suite"
            className="text-sm font-medium text-black md:text-base"
          >
            Suite
          </label>
          <input
            type="text"
            name="address[suite]"
            id="address[suite]"
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            value={formik.values.address.suite}
            className="p-2 text-sm border-b border-gray-700 rounded-sm md:text-base placeholder:text-gray-700"
          />
        </div>

        <div className="flex flex-col mb-1">
          <label
            htmlFor="zipcode"
            className="text-sm font-medium text-black md:text-base"
          >
            Address
          </label>
          <input
            type="text"
            name="address[zipcode]"
            id="address[zipcode]"
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            value={formik.values.address.zipcode}
            className="p-2 text-sm border-b border-gray-700 rounded-sm md:text-base placeholder:text-gray-700"
          />
        </div>

        <div className="flex flex-col mb-1">
          <label
            htmlFor="lat"
            className="text-sm font-medium text-black md:text-base"
          >
            Geo Latitude
          </label>
          <input
            type="text"
            name="address[geo][lat]"
            id="address[geo][lat]"
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            value={formik.values.address.geo.lat}
            className="p-2 text-sm border-b border-gray-700 rounded-sm md:text-base placeholder:text-gray-700"
          />
        </div>

        <div className="flex flex-col mb-1">
          <label
            htmlFor="lng"
            className="text-sm font-medium text-black md:text-base"
          >
            Geo Longitude
          </label>
          <input
            type="text"
            name="address[geo][lng]"
            id="address[geo][lng]"
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            value={formik.values.address.geo.lng}
            className="p-2 text-sm border-b border-gray-700 rounded-sm md:text-base placeholder:text-gray-700"
          />
        </div>

        <div className="flex flex-col mb-1">
          <label
            htmlFor="lng"
            className="text-sm font-medium text-black md:text-base"
          >
            Company Name
          </label>
          <input
            type="text"
            name="company[name]"
            id="company[name]"
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            value={formik.values.company.name}
            className="p-2 text-sm border-b border-gray-700 rounded-sm md:text-base placeholder:text-gray-700"
          />
        </div>

        <div className="flex flex-col mb-1">
          <label
            htmlFor="catchPhrase"
            className="text-sm font-medium text-black md:text-base"
          >
            Company CatchPhrase
          </label>
          <input
            type="text"
            name="company[catchPhrase]"
            id="company[catchPhrase]"
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            value={formik.values.company.catchPhrase}
            className="p-2 text-sm border-b border-gray-700 rounded-sm md:text-base placeholder:text-gray-700"
          />
        </div>

        <button
          disabled={!formik.isValid || formik.isSubmitting}
          className={`text-[1rem] p-2 bg-black  transition-all duration-500 hover:opacity-75 rounded-md text-white mt-4 ${
            !formik?.isValid && "cursor-not-allowed opacity-50"
          }`}
          type="submit"
        >
          Create User
        </button>
      </div>
    </form>
  );
}

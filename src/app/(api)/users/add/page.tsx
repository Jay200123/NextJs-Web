"use client";
import { useFormik } from "formik";
import { useStore } from "@/state/store";
import { useQuery } from "@tanstack/react-query";
import { useRouter } from "next/navigation";

export default function () {
  const router = useRouter();
  const { users, getAllUsers, addUser } = useStore();

  const { refetch } = useQuery({
    queryKey: ["users"],
    queryFn: getAllUsers,
  });

  const userId = users?.length + 1;

  const formik = useFormik({
    initialValues: {
      id: userId,
      username: "",
      email: "",
      phone: "",
      website: "",
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
        bs: "",
      },
    },
    onSubmit: async (values) => {
      try {
        await addUser(values);
        router.push("/users");
        // refetch();
      } catch (err) {
        throw new Error("Error Adding a New User");
      }
    },
  });

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
            htmlFor="phone"
            className="text-sm font-medium text-black md:text-base"
          >
            Phone
          </label>
          <input
            type="text"
            name="phone"
            id="phone"
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            value={formik.values.phone}
            className="p-2 text-sm border-b border-gray-700 rounded-sm md:text-base placeholder:text-gray-700"
          />
        </div>

        <div className="flex flex-col mb-1">
          <label
            htmlFor="website"
            className="text-sm font-medium text-black md:text-base"
          >
            website
          </label>
          <input
            type="text"
            name="website"
            id="website"
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            value={formik.values.website}
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

        <div className="flex flex-col mb-1">
          <label
            htmlFor="catchPhrase"
            className="text-sm font-medium text-black md:text-base"
          >
            Company BS
          </label>
          <input
            type="text"
            name="company[bs]"
            id="company[bs]"
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            value={formik.values.company.bs}
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

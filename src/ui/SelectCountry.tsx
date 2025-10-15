import { getCountries } from "@/lib/services";

interface Country {
  name: string;
  flag: string;
}

interface SelectCountryProps {
  defaultCountry: string;
  name: string;
  id: string;
  className?: string;
}

export default async function SelectCountry({
  defaultCountry,
  name,
  id,
  className = "",
}: SelectCountryProps) {
  const countries: Country[] = await getCountries();
  const flag = countries.find((country) => country.name === defaultCountry)?.flag ?? "";

  return (
    <select
      name={name}
      id={id}
      defaultValue={`${defaultCountry}%${flag}`}
      className={`w-full p-2 border border-gray-300 rounded ${className}`}
    >
      <option value="">Select country...</option>
      {countries.map((c) => (
        <option key={c.name} value={`${c.name}%${c.flag}`}>
          {c.name}
        </option>
      ))}
    </select>
  );
}
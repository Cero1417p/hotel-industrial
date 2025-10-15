interface Country {
  name: {
    common: string;
  };
  flags: {
    png: string;
    svg: string;
  };
}

// Si solo quieres el nombre común y la URL del flag (PNG)
export async function getCountries(): Promise<{ name: string; flag: string }[]> {
  let countries: { name: string; flag: string }[] = [];
  try {
    const res = await fetch("https://restcountries.com/v3.1/all?fields=name,flags");
    if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
    const data: Country[] = await res.json();
    countries = data.map((country) => ({
      name: country.name.common,
      flag: country.flags.png,
    }));
  } catch (error) {
    console.log("Could not fetch countries", error);
  }
  return countries;
}
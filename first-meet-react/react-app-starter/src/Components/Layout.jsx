import React, { useEffect, useState } from "react";
import Searchbar from "./Searchbar";

export const Layout = () => {
  const [data, setData] = useState(null);
  const [text, setText] = useState(""); // 1. เก็บค่าที่พิมพ์ใน Input
  const [pokemonName, setPokemonName] = useState("ditto"); // 2. เก็บชื่อโปเกมอนที่จะเอาไปดึง API จริง
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchApi() {
      setLoading(true);
      setError(null);
      try {
        // 3. ใช้ Template Literal เปลี่ยน URL ตามชื่อโปเกมอน (แปลงเป็นพิมพ์เล็กด้วย .toLowerCase())
        const response = await fetch(
          `https://pokeapi.co/api/v2/pokemon/${pokemonName.toLowerCase()}`,
        );

        if (!response.ok) {
          throw new Error("หาโปเกมอนไม่พบ");
        }

        const result = await response.json();
        setData(result);
      } catch (err) {
        console.log(err);
        setError("หาโปเกมอนไม่พบ กรุณาลองพิมพ์ชื่อใหม่");
        setData(null);
      } finally {
        setLoading(false);
      }
    }

    if (pokemonName) {
      fetchApi();
    }
  }, [pokemonName]); // 4. เมื่อ pokemonName เปลี่ยน useEffect จะทำงานดึงข้อมูลใหม่ทันที!

  // ดักจับการพิมพ์ใน Input
  function handleChange(e) {
    setText(e.target.value);
  }

  // ฟังก์ชันกดค้นหา (ส่งไปให้ Searchbar หรือกด Submit Form)
  function handleSearch(e) {
    if (e) e.preventDefault(); // ป้องกันหน้าเว็บรีเฟรชกรณีอยู่ใน <form>
    if (text.trim() !== "") {
      setPokemonName(text.trim()); // สั่งอัปเดตชื่อโปเกมอน
    }
  }

  return (
    <>
      <Searchbar
        text={text}
        handleChange={handleChange}
        handleSearch={handleSearch}
      />
      {loading && <p className="text-center text-white">Loading...</p>}
      {error && <p className="text-center text-red-500">{error}</p>}
      {!loading && !error && data && (
        <div className="bg-white text-black text-2xl rounded-md flex flex-col items-center text-center p-4">
          <img src={data.sprites.front_default} alt={data.name} width="120" />
          <h2>Name: {data.name}</h2>
          <p>Height: {data.height}</p>
          <p>Weight: {data.weight}</p>

          <h3>Abilities:</h3>
          <ul>
            {data.abilities.map((item, index) => (
              <li key={index}>
                {item.ability.name} {item.is_hidden && "(Hidden)"}
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
};

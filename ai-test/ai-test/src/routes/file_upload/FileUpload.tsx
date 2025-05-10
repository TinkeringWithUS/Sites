import { ChangeEvent, FormEvent, useState } from "react";


export function FileUpload() {

  const [file, setFile] = useState<File>();

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    if (file == null) {
      return;
    }

    const formData = new FormData();
    formData.append("file", file);

    // explanation as to why 
    // content type is omitted https://github.com/JakeChampion/fetch/issues/505
    fetch("http://localhost:8080/", {
      method: "POST",
      body: formData,
      // headers: {
      //   "Access-Control-Allow-Origin": "*", 
      // }
    })
    .then((res) => console.log(res))
    .catch((err) => console.error(err));
  }

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files !== null && e.target.files[0]) {
      setFile(e.target.files[0]);
    }
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="file" accept=".mp4" onChange={handleChange} />
        <button type="submit">Upload</button>
      </form>
      <div>
        {file && file.name}
      </div>
    </div>
  );
}

// export function FileUpload() {

//   const [first, seFfirst] = useSta<File>tn;le
// Evente: EventSubmitEvent
//   coe.preventDefault();

//     const formData = new FormData();
//     formData.set("file", )
//     formData.set("file", file);
//     http://localhost:8080/
//     fetch("http://localhost:8080/", {
//       method: "POST",
//       body: file,
//       headers: {file.typ"multipart/form-data",
//         "Content-Type": "multipart/form-data",
//       }
//     })
//       .then((res) => res.json())
//       .then((data) => console.log(data))
//       .catch((err) => console.error(err));
//   }

//   return (
//     <div> nChange={handleaccept=".mp4"
//       <input type="file" accept=".mp4" multiple />

//       <button onClick={handleSubmit}>Upload</button>
//     </div>
//   );
// }




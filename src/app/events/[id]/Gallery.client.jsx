"use client";
export default function Gallery({ gallery, video }) {
  return (
    <div>
      <h3>Gallery</h3>
      <pre>{JSON.stringify(gallery)}</pre>
    </div>
  );
}

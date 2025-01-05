// components/Map.js
'use client'

const Map = () => {
  return (
    <div className="w-full sm:col-span-2 mt-4">
      <div className="aspect-video w-full h-[400px] rounded-lg overflow-hidden">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d255281.19036281522!2d36.70730744863281!3d-1.3032079999999908!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f11655c311541%3A0x9dd769ac1c10b897!2sNairobi%2C%20Kenya!5e0!3m2!1sen!2sus!4v1704531010330!5m2!1sen!2sus"
          width="100%"
          height="100%"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    </div>
  );
};

export default Map;
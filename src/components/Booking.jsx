export default function Booking() {
  return (
    <section id="booking" className="py-32 w-full min-h-screen flex items-center justify-center z-10 relative">
      <div className="container mx-auto px-6 max-w-4xl">

        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-7xl font-display font-black tracking-tighter uppercase mb-6">צור קשר</h2>
          <p className="text-xl font-light text-neutral-400">נשמח לעמוד לשירותך בכל שעה ובכל תקלה.</p>
        </div>

        <div className="flex flex-col items-center justify-center w-full">
          <h3 className="text-3xl font-display font-bold mb-12 text-white text-center">זמינים עבורכם 24/7</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
            
            {/* Phone */}
            <a href="tel:0526410042" className="group flex flex-col items-center text-center gap-4 transition-all duration-300 hover:text-accent bg-white/5 border border-white/10 p-8 rounded-3xl hover:bg-white/10 hover:border-accent/30 shadow-xl">
              <div className="w-16 h-16 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:border-accent/50 group-hover:bg-accent/10 transition-all duration-300 mb-2">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <div>
                <p className="text-sm uppercase tracking-widest text-neutral-500 font-semibold mb-2">חייגו אלינו</p>
                <p className="text-2xl font-light text-white group-hover:text-accent transition-colors" dir="ltr">052-641-0042</p>
              </div>
            </a>

            {/* WhatsApp */}
            <a href="https://wa.me/972526410042" target="_blank" rel="noopener noreferrer" className="group flex flex-col items-center text-center gap-4 transition-all duration-300 hover:text-[#25D366] bg-white/5 border border-white/10 p-8 rounded-3xl hover:bg-white/10 hover:border-[#25D366]/30 shadow-xl">
              <div className="w-16 h-16 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:border-[#25D366]/50 group-hover:bg-[#25D366]/10 transition-all duration-300 mb-2">
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.027 6.988 2.895a9.86 9.86 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
              </div>
              <div>
                <p className="text-sm uppercase tracking-widest text-neutral-500 font-semibold mb-2">וואטסאפ</p>
                <p className="text-xl font-light text-white group-hover:text-[#25D366] transition-colors">שלחו הודעה</p>
              </div>
            </a>

            {/* Location */}
            <a href="https://www.google.com/maps/place/24%2F7+%D0%A1%D0%B0%D0%BD%D1%82%D0%B5%D1%85%D0%BD%D0%B8%D0%BA+%D7%90%D7%99%D7%A0%D7%A1%D7%98%D7%9C%D7%98%D7%95%D7%A8+%D7%90%D7%9C%D7%9B%D7%A1+%D7%99%D7%93%D7%99+%D7%96%D7%94%D7%91%E2%80%AD/@31.951997,34.7879026,12z/data=!3m1!4b1!4m6!3m5!1s0xa92f6e04ec6f161d:0xf85fe256f8eedfa2!8m2!3d31.951997!4d34.7879026!16s%2Fg%2F11z0wz8mqs?entry=ttu&g_ep=EgoyMDI2MDcwOC4wIKXMDSoASAFQAw%3D%3D" target="_blank" rel="noopener noreferrer" className="group flex flex-col items-center text-center gap-4 transition-all duration-300 hover:text-accent bg-white/5 border border-white/10 p-8 rounded-3xl hover:bg-white/10 hover:border-accent/30 shadow-xl">
              <div className="w-16 h-16 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:border-accent/50 group-hover:bg-accent/10 transition-all duration-300 mb-2">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.243-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <div>
                <p className="text-sm uppercase tracking-widest text-neutral-500 font-semibold mb-2">אזור שירות</p>
                <p className="text-xl font-light text-white group-hover:text-accent transition-colors">ראשון והסביבה</p>
              </div>
            </a>

          </div>
        </div>
      </div>
    </section>
  );
}
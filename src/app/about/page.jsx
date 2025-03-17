import React from 'react'

const About = () => {
  return (
    <div>
       {/* About Section */}
       <section className="py-16 px-6 text-center">
        <motion.div 
          initial={{ opacity: 0, y: 50 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          transition={{ duration: 1 }}
        >
          <h2 className="text-4xl font-semibold">Who We Are</h2>
          <p className="mt-4 max-w-2xl mx-auto">
            Welcome to the most exclusive nightlife experience. We bring together top DJs, stunning venues, and unforgettable moments.
          </p>
        </motion.div>
      </section>
    </div>
  )
}

export default About

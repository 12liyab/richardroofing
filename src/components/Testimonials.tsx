import { Star, Quote } from 'lucide-react';

export default function Testimonials() {
  const testimonials = [
    {
      id: 1,
      name: 'JL Properties',
      role: 'Estate Developer, Accra',
      content:
        'We have worked with RICHSAM Roofing Company on several estate projects, and the quality of work has been consistent. They understand large developments, keep to timelines, and deliver neat finishing. We are satisfied with their professionalism and would recommend them.',
      rating: 5,
    },
    {
      id: 2,
      name: 'Eng. Obed',
      role: 'Building Contractor',
      content:
        'As a contractor, I value reliability. Their roofing team was easy to work with on site, followed specifications, and completed the work as agreed. The coordination was smooth and the final result me expectations.',
      rating: 5,
    },
    {
      id: 3,
      name: 'Mr. Asamoah',
      role: 'Business Owner',
      content:
        'They handled the roofing works for my commercial property, and the experience was stress free. Communication was clear, pricing was fair, and the job was completed on time. The roof has been durable and well finised.',
      rating: 5,
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">What Our Clients Say</h2>
          <p className="text-xl text-gray-600">
            Don't just take our word for it - hear from our satisfied customers
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white rounded-lg shadow-lg p-8 relative hover:shadow-xl transition-shadow"
            >
              <div className="absolute top-6 right-6 text-yellow-600 opacity-20">
                <Quote className="h-12 w-12" />
              </div>
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-yellow-500 text-yellow-500" />
                ))}
              </div>
              <p className="text-gray-600 mb-6 leading-relaxed">{testimonial.content}</p>
              <div className="border-t pt-4">
                <p className="font-semibold text-gray-900">{testimonial.name}</p>
                <p className="text-sm text-gray-500">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

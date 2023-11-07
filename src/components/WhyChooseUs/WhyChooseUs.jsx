/* eslint-disable react/no-unescaped-entities */
const WhyChooseUs = () => {
  return (
    <>
      {/* main div */}
      <div className="max-w-screen-xl mx-auto px-4 flex flex-col justify-between md:flex-row">
        <div>
          <p>dummpy</p>
        </div>
        <div>
          <p className="text-lg font-bold text-[#ae4848]"> Why choose us? </p>
          <h1 className="w-9/12 text-4xl font-extrabold text-[#4b1818]">
            World of talent at your fingertips
          </h1>
          <div className="collapse collapse-arrow bg-base-200">
            <input type="radio" name="my-accordion-2"  />
            <div className="collapse-title text-[#1a0606] text text-xl font-medium">
            How does the job marketplace work?
            </div>
            <div className="collapse-content">
              <p>The marketplace connects employers and job seekers. Employers post job listings, while job seekers apply directly through the platform.</p>
            </div>
          </div>
          <div className="collapse collapse-arrow bg-base-200 my-4">
            <input type="radio" name="my-accordion-2" />
            <div className="collapse-title text-xl font-medium">
            How do I create an account?
            </div>
            <div className="collapse-content">
              <p>Click "Register," provide info, verify your email, and you're set!</p>
            </div>
          </div>
          <div className="collapse collapse-arrow bg-base-200">
            <input type="radio" name="my-accordion-2" />
            <div className="collapse-title text-xl font-medium">
            Is there a fee for using the job marketplace?
            </div>
            <div className="collapse-content">
              <p> Basic use is free. Premium features are available through subscription plans. We're committed to value for all users.</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default WhyChooseUs;

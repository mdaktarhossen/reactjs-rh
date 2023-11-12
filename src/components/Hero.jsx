
const Hero = () => {
  const postFromData = (event) => {
    event.preventDefault();

  }
  return (
    <div>
      <form onSubmit={postFromData}>
        <input type="text" placeholder="Enter Name" />
        <button type="submit">Submit</button>
      </form>

    </div>
  );
};

export default Hero;
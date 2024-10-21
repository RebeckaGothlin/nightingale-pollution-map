export const Home = () => {
  return (
    <>
      <h2>Pollution Map</h2>

      <h3>About PM2.5 and Heart desease</h3>
      <p>
        PM2.5, or fine particulate matter, is linked to heart diseases due to
        its ability to penetrate deep into the lungs and enter the bloodstream.
        Exposure to high levels of PM2.5 can cause inflammation in blood
        vessels, leading to conditions like atherosclerosis, which increases the
        risk of heart attacks and strokes. Studies show that both short-term and
        long-term exposure to PM2.5 can increase cardiovascular mortality and
        the likelihood of acute heart issues in at-risk individuals. This
        correlation highlights the importance of reducing air pollution to
        prevent heart-related health problems.
      </p>
      <div className="image-container">
        <img src="../../src/assets/pollution-guide.png" alt="Pollution guide" />
      </div>
    </>
  );
};

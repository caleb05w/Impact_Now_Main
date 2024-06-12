const ScrollToTopButton = ({Content}) => {
    const scrollToTop = () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    };
  
    return (
      <button onClick={scrollToTop} style={{color: '#6b7280'}}>
        {Content}
      </button>
    );
  };

  export default ScrollToTopButton;
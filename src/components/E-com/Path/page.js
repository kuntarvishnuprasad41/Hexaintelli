import React from 'react';
import styles from './page.module.css';

export const Pathcom = () => {
  return (
    <div className={styles.Container}>
      <div className={styles.data}>
        <h1 className={styles.heading}>
             Our Process: How We Craft Your Custom E-commerce Solutions
        </h1>
        <p className={styles.para}>
        At hexaIntelli, we understand that navigating the e-commerce landscape can be challenging, especially when it comes to integrating advanced technologies. That's where we step in. Let's walk through how we make things simpler, smarter, and smoother for you.
        </p>
        
        <h4 className={styles.parahead}>
          <strong>1. Getting to Know You</strong> 
        </h4>
        <ul className={styles.list}>
            <li className={styles.tips}> 
                <strong>Let's Chat</strong>
                First things first, we want to hear about your business. We'll dive deep into your e-commerce operations, your target market, and your pain points. What's working for you? What challenges are you facing? We're all ears.
            </li>
            <li className={styles.tips}>
                <strong>Planning Your Path</strong>
                Based on our discussion, we'll develop a tailored strategy. Think of it as a custom roadmap that's going to take your e-commerce business from good to great, leveraging our expertise in web development, SEO, and machine learning.
            </li>
        </ul>
        <h4 className={styles.parahead}>
          <strong>2.Building Your Toolbox</strong> 
        </h4>
        <ul className={styles.list}>
            <li className={styles.tips}> 
                <strong>Crafting Your Solutions</strong>
                Now, we roll up our sleeves and start building. Need a high-performance e-commerce website? A way to optimize your SEO? Or perhaps you're looking to implement personalized recommendations using machine learning? We've got you covered with our Next.js and Firebase expertise.
            </li>
            <li className={styles.tips}>
                <strong>You Call the Shots</strong> 
                As we build, we'll keep you in the loop with regular check-ins. Your feedback is crucial – it ensures that the solutions we're developing fit your needs perfectly.
            </li>
        </ul>
        <h4 className={styles.parahead}>
          <strong>3. Putting It All Together</strong> 
        </h4>
        <ul className={styles.list}>
            <li className={styles.tips}> 
                <strong>Making It Real</strong>
                It's showtime! We get everything up and running, ensuring seamless integration with your existing systems. Our team handles everything from frontend development to database optimization and cloud infrastructure setup.
            </li>
            <li className={styles.tips}>
                <strong>Testing, Testing</strong> 
                Before we hand over the keys, we conduct thorough testing. We're talking top-to-bottom checks to ensure everything is running smoothly and securely.
            </li>
        </ul>
        <h4 className={styles.parahead}>
          <strong>4. Staying with You Long-Term</strong> 
        </h4>
        <ul className={styles.list}>
            <li className={styles.tips}> 
                <strong>Training and Handover</strong> 
                We don't just deliver and disappear. We'll walk you and your team through everything, making sure you're comfortable with your new e-commerce platform and tools.
            </li>
            <li className={styles.tips}>
                <strong>Always Here for You</strong>
                The e-commerce world evolves rapidly. We stick around to offer support, updates, and any tweaks you need down the road. Our team is committed to your long-term success.
            </li>
        </ul>
        <img className={styles.image} src='/img5.webp' alt="E-commerce solutions" />
      </div>
    </div>
  );
};
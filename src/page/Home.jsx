import React from "react";
import Hero from "../components/Hero/Hero";
import Header from "../components/Header/Header";
import Features from "../components/features/Features";
import AboutUs from "../components/aboutUs/AboutUs";
import Statistics from "../components/statistics/Statistics";
import ServicesSection from "../components/servicesSection/ServicesSection";
import RecentWorks from "../components/recentWorks/RecentWorks";
import TeamSection from "../components/teamSection/TeamSection";
import PricingSection from "../components/pricingSection/PricingSection";
import ClientsFeedback from "../components/clientsFeedback/ClientsFeedback";
import LatestNews from "../components/latestNews/LatestNews";
import ContactUs from "../components/contactUs/ContactUs";
import NewsletterSubscribe from "../components/newsletterSubscribe/NewsletterSubscribe";
import Footer from "../components/footer/Footer";
import Experience from "../components/experience/Experience";
import { Box } from "@mui/material";

export default function Home() {
  return (
    <Box sx={{ mx: "auto", width: "100%" }}>
      <Header />
      <main>
        <Hero />
        <Features />
        <AboutUs />
        <Statistics />
        <Experience />
        <ServicesSection />
        <RecentWorks />
        <TeamSection />
        <PricingSection />
        <ClientsFeedback />
        <LatestNews />
        <ContactUs />
        <NewsletterSubscribe />
        <Footer />
      </main>
    </Box>
  );
}

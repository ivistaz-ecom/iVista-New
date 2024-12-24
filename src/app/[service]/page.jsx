"use client";
import Link from "next/link";
import { Container } from "react-bootstrap";
import Header1 from "../../../components/HeaderBlack";
import Footer from "../../../components/Footer";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const CustomErrorPage = () => {
  const pathname = usePathname();

  const [domainName, setDomainName] = useState("");

  useEffect(() => {
    setDomainName(window.location.hostname);
  }, []);

  return (
    <>
      <Header1 />
      <Container
        className="bg-black w-100 h-100vh text-white d-flex flex-column justify-content-center align-items-center"
        fluid
      >
        <div className="para-text">
          <h1 className="text-center">Page 404</h1>
          <p>
            {domainName}
            {pathname} page you're looking for could not be found.
          </p>
          <Link
            href="/welcome"
            className="text-decoration-none text-white d-flex justify-content-center"
          >
            <p className="text-red para-text border-bottom d-inline-block ">
              Go back to home
            </p>
          </Link>
        </div>
      </Container>
      <Footer />
    </>
  );
};

export default CustomErrorPage;

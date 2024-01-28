import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useLayoutEffect, useRef } from "react";
import styled from "styled-components";
import Accordion from "../Accordion";

const Faqs = () => {
  const ref = useRef(null);

  gsap.registerPlugin(ScrollTrigger);

  useLayoutEffect(() => {
    let element = ref.current;

    ScrollTrigger.create({
      trigger: element,
      start: "top top",
      bottom: "bottom top",
      pin: true,
      pinSpacing: false,
      scrub: true,
    });
    return () => {
      ScrollTrigger.kill();
    };
  }, []);

  return (
    <Section ref={ref} id="faqs">
      <Title>FAQs</Title>
      <Container>
        <Box>
          <Accordion title="WHERE CAN I VIEW MY NFTS?">
          Your NFTs can be viewed in your digital wallet or on NFT marketplaces where you hold an account. 
          For example, if you use MetaMask, Trust Wallet, or any Ethereum-compatible wallet, 
          you can link it to platforms like OpenSea, Rarible, or Foundation to view your NFT collection.
          </Accordion>
          <Accordion title="HOW TO BUY AN NFT?">
            To buy an NFT, you first need a digital wallet that supports Ethereum, like MetaMask. Then, load your wallet with Ether (ETH). Next, visit an NFT marketplace like OpenSea, connect your wallet, browse the NFT collections, and make a purchase. The NFT will be transferred to your wallet and visible on the blockchain.
          </Accordion>
        </Box>
        <Box>
        <Accordion title="WHAT IS AN NFT?">
          An NFT, or Non-Fungible Token, is a unique digital asset that represents ownership and proof of authenticity of a one-of-a-kind item or piece of content, such as art, music, videos, or collectibles, stored on a blockchain. Unlike cryptocurrencies, each NFT has a distinct value and cannot be exchanged on a one-to-one basis.
        </Accordion>
        <Accordion title="HOW ARE CRYPTO AND NFTS LINKED?">
          NFTs are built on blockchain technology, similar to cryptocurrencies like Bitcoin and Ethereum. They use the blockchain to verify and secure unique ownership of digital assets. Most NFTs are part of the Ethereum blockchain, which supports these NFTs with its underlying infrastructure, making them secure and interoperable with other digital assets.
        </Accordion>
        </Box>
      </Container>
    </Section>
  );
};

const Section = styled.section`
  min-height: 100vh;
  height: auto;
  width: 100vw;
  background-color: ${(props) => props.theme.text};
  color: ${(props) => props.theme.body};
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Title = styled.h1`
  font-size: ${(props) => props.theme.fontxxl};
  text-transform: uppercase;
  font-weight: 500;
  color: ${(props) => props.theme.body};
  margin: 1rem auto;
  border-bottom: 2px solid ${(props) => props.theme.body};
  width: fit-content;

  @media (max-width: 48em) {
    font-size: ${(props) => props.theme.fontxl};
  }
`;

const Container = styled.div`
  width: 75%;
  margin: 2rem auto;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 64em) {
    width: 80%;
  }

  @media (max-width: 48em) {
    width: 90%;
    flex-direction: column;

    & > *::last-child {
      & > *::first-child {
        margin-top: 0;
      }
    }
  }
`;

const Box = styled.div`
  width: 45%;

  @media (max-width: 64em) {
    width: 90%;
    align-self: center;
  }
`;

export default Faqs;

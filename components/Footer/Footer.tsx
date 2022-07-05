import React from "react";
import NextLink from "next/link";
import { Box, Flex, Text, Image, Link, Stack, HStack, useColorMode, Divider } from "@chakra-ui/react";
import Container from "../common/Container";

const Footer = () => {
  const { colorMode } = useColorMode();
  return (
    <Box
      as={"footer"}
      backgroundColor={colorMode === "light" ? "#ffffff" : "#0d1013"}
      fontSize={".8rem"}
      paddingY={{ md: 3, base: 2 }}
      borderTopWidth={1}
      position="sticky"
      bottom={0}
    >
      <Container>
        <Flex justifyContent={"space-between"} flexDirection={{ md: "row", xs: "column" }}>
          <Flex justifyContent={{ xs: "center", md: "start" }} mb={{ xs: 4, md: 0 }}>
            <Text color={"gray.500"}>
              Copyright {new Date().getFullYear()} &mdash; All gifs © of their respective owners
            </Text>
          </Flex>
          <HStack spacing={6}>
            <HStack spacing={4} mb={{ xs: 4, md: 0 }}>
              <NextLink href={"/about"}>
                <Link href={"/about"} color={"gray.600"}>
                  About
                </Link>
              </NextLink>
              <Link href={"https://airtable.com/shr8DNKtWz5PuZL5q"} isExternal color={"gray.600"}>
                Contact
              </Link>
            </HStack>
            <Divider orientation="vertical" />
            <HStack spacing={2}>
              <Text color={"gray.500"}>Powered by</Text>
              <Link href={"https://giphy.com/"} isExternal target={"_blank"}>
                <svg xmlns="http://www.w3.org/2000/svg" height="14" width="54" viewBox="0 0 163.79999999999998 35">
                  <g fill="none" fillRule="evenodd">
                    <path d="M4 4h20v27H4z" fill="#000" />
                    <g fillRule="nonzero">
                      <path d="M0 3h4v29H0z" fill="#04ff8e" />
                      <path d="M24 11h4v21h-4z" fill="#8e2eff" />
                      <path d="M0 31h28v4H0z" fill="#00c5ff" />
                      <path d="M0 0h16v4H0z" fill="#fff152" />
                      <path d="M24 8V4h-4V0h-4v12h12V8" fill="#ff5b5b" />
                      <path d="M24 16v-4h4" fill="#551c99" />
                    </g>
                    <path d="M16 0v4h-4" fill="#999131" />
                    <path
                      d="M59.1 12c-2-1.9-4.4-2.4-6.2-2.4-4.4 0-7.3 2.6-7.3 8 0 3.5 1.8 7.8 7.3 7.8 1.4 0 3.7-.3 5.2-1.4v-3.5h-6.9v-6h13.3v12.1c-1.7 3.5-6.4 5.3-11.7 5.3-10.7 0-14.8-7.2-14.8-14.3S42.7 3.2 52.9 3.2c3.8 0 7.1.8 10.7 4.4zm9.1 19.2V4h7.6v27.2zm20.1-7.4v7.3h-7.7V4h13.2c7.3 0 10.9 4.6 10.9 9.9 0 5.6-3.6 9.9-10.9 9.9zm0-6.5h5.5c2.1 0 3.2-1.6 3.2-3.3 0-1.8-1.1-3.4-3.2-3.4h-5.5zM125 31.2V20.9h-9.8v10.3h-7.7V4h7.7v10.3h9.8V4h7.6v27.2zm24.2-17.9l5.9-9.3h8.7v.3l-10.8 16v10.8h-7.7V20.3L135 4.3V4h8.7z"
                      fill={colorMode === "light" ? "rgb(51, 51, 51)" : "#ffffff"}
                      fillRule="nonzero"
                    />
                  </g>
                </svg>
              </Link>
              {/* <Link href={"https://airtable.com/"} isExternal target={"_blank"}>
                <svg width="108.8" height="16px" viewBox="0 0 680 148">
                  <g>
                    <path
                      fill={colorMode === "light" ? "rgb(51, 51, 51)" : "#ffffff"}
                      d="M272.8495 85.1981L261.0145 53.2891C260.5305 51.9841 258.6855 51.9841 258.2015 53.2891L246.3655 85.1981C246.0025 86.1781 246.7275 87.2201 247.7725 87.2201L271.4435 87.2201C272.4885 87.2201 273.2125 86.1781 272.8495 85.1981M278.3175 103.1321L240.8985 103.1321C240.2705 103.1321 239.7095 103.5221 239.4915 104.1101L232.1245 123.9641C231.9065 124.5521 231.3455 124.9421 230.7185 124.9421L214.5015 124.9421C213.4395 124.9421 212.7135 123.8691 213.1095 122.8841L250.4505 29.8621C250.6785 29.2941 251.2295 28.9211 251.8425 28.9211L267.3725 28.9211C267.9845 28.9211 268.5365 29.2941 268.7645 29.8621L306.1055 122.8831C306.5015 123.8691 305.7755 124.9421 304.7135 124.9421L288.4965 124.9421C287.8695 124.9421 287.3085 124.5521 287.0905 123.9641L279.7235 104.1101C279.5055 103.5221 278.9445 103.1321 278.3175 103.1321M313.7043 61.5684L327.5763 61.5684C328.4053 61.5684 329.0763 62.2404 329.0763 63.0684L329.0763 123.4424C329.0763 124.2704 328.4053 124.9424 327.5763 124.9424L313.7043 124.9424C312.8763 124.9424 312.2043 124.2704 312.2043 123.4424L312.2043 63.0684C312.2043 62.2404 312.8763 61.5684 313.7043 61.5684M379.6682 76.2549C379.6682 77.0829 378.9962 77.7549 378.1682 77.7549L377.7482 77.7549C370.8892 77.7549 365.8582 79.4009 362.6582 82.6929 359.4562 85.9849 357.8572 91.4269 357.8572 99.0169L357.8572 123.4429C357.8572 124.2709 357.1862 124.9429 356.3572 124.9429L342.6222 124.9429C341.7942 124.9429 341.1222 124.2709 341.1222 123.4429L341.1222 63.0679C341.1222 62.2399 341.7942 61.5679 342.6222 61.5679L356.2202 61.5679C357.0492 61.5679 357.7202 62.2399 357.7202 63.0679L357.7202 75.0109 357.9952 75.0109C359.6412 70.0729 362.2472 66.2799 365.8142 63.6259 369.3802 60.9749 373.7702 59.6479 378.9822 59.6479L379.6682 59.6479 379.6682 76.2549zM417.5974 75.6973C416.7694 75.6973 416.0974 76.3693 416.0974 77.1973L416.0974 102.3093C416.0974 104.8703 416.5984 106.6983 417.6064 107.7963 418.6114 108.8933 420.3494 109.4423 422.8184 109.4423L424.1994 109.4423C425.0274 109.4423 425.6994 110.1133 425.6994 110.9423L425.6994 123.5793C425.6994 124.4083 425.0274 125.0793 424.1994 125.0793L418.2914 125.0793C412.1644 125.0793 407.4554 123.5023 404.1634 120.3473 400.8704 117.1923 399.2244 112.5073 399.2244 106.2873L399.2244 77.1973C399.2244 76.3693 398.5534 75.6973 397.7244 75.6973L389.0654 75.6973C388.2364 75.6973 387.5654 75.0253 387.5654 74.1973L387.5654 63.0683C387.5654 62.2403 388.2364 61.5683 389.0654 61.5683L397.7244 61.5683C398.5534 61.5683 399.2244 60.8973 399.2244 60.0683L399.2244 37.6913C399.2244 36.8633 399.8964 36.1913 400.7244 36.1913L414.5974 36.1913C415.4254 36.1913 416.0974 36.8633 416.0974 37.6913L416.0974 60.0683C416.0974 60.8973 416.7694 61.5683 417.5974 61.5683L427.6284 61.5683C428.4574 61.5683 429.1284 62.2403 429.1284 63.0683L429.1284 74.1973C429.1284 75.0253 428.4574 75.6973 427.6284 75.6973L417.5974 75.6973zM481.1191 106.1499C484.2741 102.8579 485.8511 98.5599 485.8511 93.2549 485.8511 87.9529 484.2741 83.6529 481.1191 80.3609 477.9641 77.0689 473.8251 75.4229 468.7041 75.4229 463.5821 75.4229 459.4461 77.0689 456.2901 80.3609 453.1361 83.6529 451.5581 87.9529 451.5581 93.2549 451.5581 98.5599 453.1361 102.8579 456.2901 106.1499 459.4461 109.4419 463.5821 111.0879 468.7041 111.0879 473.8251 111.0879 477.9641 109.4419 481.1191 106.1499M449.0891 123.0219C444.4251 120.3709 440.7431 116.5059 438.0471 111.4309 435.3481 106.3559 434.0001 100.2979 434.0001 93.2549 434.0001 86.2149 435.3481 80.1549 438.0471 75.0799 440.7431 70.0049 444.4251 66.1429 449.0891 63.4889 453.7531 60.8369 458.8731 59.5109 464.4521 59.5109 469.3901 59.5109 473.6191 60.4709 477.1411 62.3919 480.6601 64.3119 483.4721 67.0099 485.5771 70.4849L485.8511 70.4849 485.8511 63.0679C485.8511 62.2399 486.5231 61.5679 487.3511 61.5679L501.0861 61.5679C501.9151 61.5679 502.5861 62.2399 502.5861 63.0679L502.5861 123.4419C502.5861 124.2709 501.9151 124.9419 501.0861 124.9419L487.3511 124.9419C486.5231 124.9419 485.8511 124.2709 485.8511 123.4419L485.8511 116.0259 485.5771 116.0259C483.4721 119.5029 480.6601 122.1989 477.1411 124.1189 473.6191 126.0399 469.3901 126.9999 464.4521 126.9999 458.8731 126.9999 453.7531 125.6729 449.0891 123.0219M559.709 106.1499C562.864 102.8579 564.441 98.5599 564.441 93.2549 564.441 87.9529 562.864 83.6529 559.709 80.3609 556.555 77.0689 552.416 75.4229 547.295 75.4229 542.173 75.4229 538.036 77.0689 534.881 80.3609 531.727 83.6529 530.148 87.9529 530.148 93.2549 530.148 98.5599 531.727 102.8579 534.881 106.1499 538.036 109.4419 542.173 111.0879 547.295 111.0879 552.416 111.0879 556.555 109.4419 559.709 106.1499M538.859 124.1189C535.338 122.1989 532.525 119.5029 530.423 116.0259L530.148 116.0259 530.148 123.4419C530.148 124.2709 529.477 124.9419 528.648 124.9419L514.776 124.9419C513.948 124.9419 513.276 124.2709 513.276 123.4419L513.276 30.4209C513.276 29.5929 513.948 28.9209 514.776 28.9209L528.648 28.9209C529.477 28.9209 530.148 29.5929 530.148 30.4209L530.148 70.4849 530.423 70.4849C532.525 67.0099 535.338 64.3119 538.859 62.3919 542.379 60.4709 546.609 59.5109 551.548 59.5109 557.125 59.5109 562.247 60.8369 566.911 63.4889 571.575 66.1429 575.255 70.0049 577.953 75.0799 580.649 80.1549 582 86.2149 582 93.2549 582 100.2979 580.649 106.3559 577.953 111.4309 575.255 116.5059 571.575 120.3709 566.911 123.0219 562.247 125.6729 557.125 126.9999 551.548 126.9999 546.609 126.9999 542.379 126.0399 538.859 124.1189M605.3721 124.9424L591.5001 124.9424C590.6711 124.9424 590.0001 124.2704 590.0001 123.4424L590.0001 30.4214C590.0001 29.5934 590.6711 28.9214 591.5001 28.9214L605.3721 28.9214C606.2001 28.9214 606.8721 29.5934 606.8721 30.4214L606.8721 123.4424C606.8721 124.2704 606.2001 124.9424 605.3721 124.9424M638.0937 76.2461C635.7937 78.0401 634.2407 80.6301 633.4367 84.0181 633.2157 84.9521 633.9447 85.8481 634.9047 85.8481L661.3047 85.8481C662.2207 85.8481 662.9407 85.0281 662.7927 84.1241 662.2647 80.9191 660.8907 78.3631 658.6697 76.4521 656.0637 74.2121 652.6557 73.0911 648.4497 73.0911 644.2427 73.0911 640.7897 74.1431 638.0937 76.2461M671.9067 68.3581C677.3017 74.2571 679.9997 82.6031 679.9997 93.3921L679.9997 95.1841C679.9997 96.0131 679.3287 96.6841 678.4997 96.6841L634.3957 96.6841C633.4637 96.6841 632.7497 97.5321 632.9107 98.4501 633.6157 102.4581 635.3887 105.6421 638.2307 108.0011 641.4757 110.7001 645.5697 112.0481 650.5077 112.0481 656.8827 112.0481 662.7837 109.5601 668.2097 104.5831 668.8727 103.9751 669.9237 104.1041 670.4377 104.8421L677.1817 114.5221C677.6157 115.1451 677.5237 116.0051 676.9517 116.5051 673.6437 119.4011 669.9947 121.8261 666.0077 123.7761 661.6187 125.9241 656.4507 127.0001 650.5077 127.0001 643.6497 127.0001 637.6577 125.6041 632.5377 122.8161 627.4147 120.0281 623.4377 116.0951 620.6047 111.0191 617.7687 105.9441 616.3517 100.0691 616.3517 93.3921 616.3517 86.7181 617.7237 80.8201 620.4667 75.6971 623.2097 70.5771 627.0507 66.5991 631.9897 63.7631 636.9277 60.9301 642.6887 59.5111 649.2737 59.5111 658.9647 59.5111 666.5097 62.4601 671.9067 68.3581M330.8866 39.2473C330.8866 44.9063 326.2996 49.4933 320.6406 49.4933 314.9816 49.4933 310.3936 44.9063 310.3936 39.2473 310.3936 33.5883 314.9816 29.0013 320.6406 29.0013 326.2996 29.0013 330.8866 33.5883 330.8866 39.2473"
                    ></path>
                    <path
                      fill="rgb(252, 180, 0)"
                      d="M78.9992,1.8675 L13.0402,29.1605 C9.3722,30.6785 9.4102,35.8885 13.1012,37.3515 L79.3362,63.6175 C85.1562,65.9255 91.6372,65.9255 97.4562,63.6175 L163.6922,37.3515 C167.3822,35.8885 167.4212,30.6785 163.7522,29.1605 L97.7942,1.8675 C91.7762,-0.6225 85.0162,-0.6225 78.9992,1.8675"
                    ></path>
                    <path
                      fill="rgb(24, 191, 255)"
                      d="M94.2726,77.9608 L94.2726,143.5768 C94.2726,146.6978 97.4196,148.8348 100.3206,147.6848 L174.1266,119.0368 C175.8116,118.3688 176.9166,116.7408 176.9166,114.9288 L176.9166,49.3128 C176.9166,46.1918 173.7696,44.0548 170.8686,45.2048 L97.0626,73.8528 C95.3786,74.5208 94.2726,76.1488 94.2726,77.9608"
                    ></path>
                    <path
                      fill="rgb(248, 43, 96)"
                      d="M77.0384,81.3464 L55.1344,91.9224 L52.9104,92.9974 L6.6724,115.1524 C3.7414,116.5664 0.0004,114.4304 0.0004,111.1744 L0.0004,49.5884 C0.0004,48.4104 0.6044,47.3934 1.4144,46.6274 C1.7524,46.2884 2.1354,46.0094 2.5334,45.7884 C3.6384,45.1254 5.2144,44.9484 6.5544,45.4784 L76.6704,73.2594 C80.2344,74.6734 80.5144,79.6674 77.0384,81.3464"
                    ></path>
                    <path
                      fill="rgba(0, 0, 0, 0.25)"
                      d="M77.0384,81.3464 L55.1344,91.9224 L1.4144,46.6274 C1.7524,46.2884 2.1354,46.0094 2.5334,45.7884 C3.6384,45.1254 5.2144,44.9484 6.5544,45.4784 L76.6704,73.2594 C80.2344,74.6734 80.5144,79.6674 77.0384,81.3464"
                    ></path>
                  </g>
                </svg>
              </Link> */}
            </HStack>
          </HStack>
        </Flex>
      </Container>
    </Box>
  );
};

export default Footer;

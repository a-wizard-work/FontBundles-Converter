import { FC } from "react";

import { StyledContainer } from "styles/components";
import { Row, Col } from "components/Grid";
import Package from "components/Package";
import { PackageSectionWrapper } from "./styles";

import { ReactComponent as PackageRefreshIcon } from "assets/icons/package-refresh.svg";
import { ReactComponent as PackageTimeIcon } from "assets/icons/package-time.svg";
import { ReactComponent as PackageShiledIcon } from "assets/icons/package-shield.svg";

const PACKAGES = [
  {
    icon: <PackageRefreshIcon />,
    title: "Lorem ipsum dolor sit amet",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    icon: <PackageTimeIcon />,
    title: "Lorem ipsum dolor sit amet",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    icon: <PackageShiledIcon />,
    title: "Lorem ipsum dolor sit amet",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
];

const PackageSection: FC = () => {
  return (
    <StyledContainer fluid>
      <Row>
        <Col lg={12} md={12}>
          <PackageSectionWrapper>
            {PACKAGES.map((p, idx) => (
              <Package
                key={`package-${idx}`}
                icon={p.icon}
                title={p.title}
                description={p.description}
              />
            ))}
          </PackageSectionWrapper>
        </Col>
      </Row>
    </StyledContainer>
  );
};

export default PackageSection;

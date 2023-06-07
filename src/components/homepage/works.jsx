import React from "react";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";

import Card from "../common/card";

import "./styles/works.css";

const Works = () => {
	return (
		<div className="works">
			<Card
				icon={faBriefcase}
				title="Work"
				body={
					<div className="works-body">
						<div className="work">
							<img
								src="https://ast-science.com/wp-content/uploads/2022/08/cropped-favicon.png"
								alt="facebook"
								className="work-image"
							/>
							<div className="work-title">AST SpaceMobile</div>
							<div className="work-subtitle">
								Software Engineer
							</div>
							<div className="work-duration">2023 - Present</div>
						</div>

						<div className="work">
							<img
								src="data:image/png;base64,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"
								alt="twitter"
								className="work-image"
							/>
							<div className="work-title">Ariel University</div>
							<div className="work-subtitle">
								Lecturer
							</div>
							<div className="work-duration">2023 - Present</div>
						</div>
					</div>
				}
			/>
		</div>
	);
};

export default Works;

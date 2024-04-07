import React, { FC } from "react";
import styles from "./Workplace.module.css";
import { StepType, WorkplaceDataItem } from "../../models/common";
import { DateTime } from "luxon";
import Badge from "../Badge/Badge";
import { useTranslation } from "react-i18next";
import LineLabel from "../LineLabel/LineLabel";
import TimelineDataLine from "../TimelineDataLine/TimelineDataLine";
import Link from "../Link/Link";

interface WorkplaceProps {
  data: WorkplaceDataItem;
}

const Workplace: FC<WorkplaceProps> = (props) => {
  const { t } = useTranslation();

  const from = DateTime.fromISO(props.data.from);
  let to = props.data.to
    ? DateTime.fromISO(props.data.to)
    : DateTime.now();
    to = to.plus({ days: 1 })
  let currentDiff = to.diff(from, ["years", "months"]);
  const years = currentDiff.years
  const months = Math.ceil(currentDiff.months / 0.5) * 0.5;
  const yearLabel = (years > 1 && t('years')) || (years > 0 && t('year')) || null;
  const monthLabel = (months > 1 && t('months')) || (months > 0 && t('month')) || null;

  const fromAsLocale = DateTime.fromISO(props.data.from).toLocaleString(
    DateTime.DATE_MED
  );

  const toAsLocale =
    props.data.to &&
    DateTime.fromISO(props.data.to).toLocaleString(DateTime.DATE_MED);

  const duties = props.data.duties?.map((duty, index) => {
    return (
      <li key={index} className="text-left">
        {duty}
      </li>
    );
  });
  const technologies = props.data.technologies?.map((technology, index) => {
    return <Badge key={index}>{technology}</Badge>;
  });

  return (
    <div className={styles.Workplace} data-testid="Workplace">
      <div className="flex gap-2">
        <div className="flex flex-col justify-between gap-1 w-32 break-inside-avoid">
          {toAsLocale && (
            <span className="font-semibold py-2">{toAsLocale} </span>
          )}
          {!toAsLocale && (
            <span className="font-semibold py-2">{t("today")}</span>
          )}
          <span className="flex-1 flex justify-around break-inside-avoid relative">
            <div className="border-dotted border-sky-500 border-l-8 border-0"></div>
            <div className="rounded border-2 flex flex-col bg-gray-50 p-1 absolute text-sm top-1/2 translate-y-[-50%]">
              {years > 0 && <span className="whitespace-nowrap">
                {years} {yearLabel}
              </span>}
              {months > 0 && <span className="whitespace-nowrap">
                {months} {monthLabel}
              </span>}
            </div>
          </span>
          <span className="font-semibold py-2">{fromAsLocale}</span>
        </div>
        <div className="flex flex-col flex-1 gap-1">
          <TimelineDataLine>
            <LineLabel icon={"⌨️"} label={"steptype"} />
            <span className="flex-1 flex items-center">
              {t(props.data.type)}
            </span>
          </TimelineDataLine>
          <TimelineDataLine>
            <LineLabel icon={"👨🏽‍💻"} label={"title"} />
            <span className="flex-1 flex items-center text-left">
              {props.data.title}
            </span>
          </TimelineDataLine>
          {props.data.degree && (
            <TimelineDataLine>
              <LineLabel icon={"🎓"} label={"degree"} />
              <span className="flex-1 flex items-center">
                {t(props.data.degree)}
              </span>
            </TimelineDataLine>
          )}
          <TimelineDataLine>
            <LineLabel icon={"🏢"} label={props.data.type === StepType.Job || props.data.type === StepType.Internship || props.data.type === StepType.WorkingStudent ? "workplace" : "institution"} /> 
            <span className="flex-1 flex items-center text-left">
              {props.data.company}
            </span>
          </TimelineDataLine>
          {props.data.type === StepType.Job && (
            <TimelineDataLine>
              <LineLabel icon={"🕘"} label={"workingtime"} />
              <span className="flex-1 flex items-center">
                {t(props.data.employmentType || "")}
              </span>
            </TimelineDataLine>
          )}

          <TimelineDataLine>
            <LineLabel icon={"🏙️"} label={"location"} />
            <span className="flex-1 flex text-left items-center">
              {props.data.place}
            </span>
          </TimelineDataLine>
          {props.data.website && (
            <TimelineDataLine>
              <LineLabel icon={"🧭"} label={"website"} />
              <span className="flex-1 flex items-center">
                <Link url={props.data.website} />
              </span>
            </TimelineDataLine>
          )}
          {props.data.duties && (
            <TimelineDataLine>
              <LineLabel icon={"📋"} label={"tasks"} />
              <span className="flex-1 flex flex-col">
                <ul className="list-disc">{duties}</ul>
              </span>
            </TimelineDataLine>
          )}
          {props.data.technologies && (
            <TimelineDataLine>
              <LineLabel icon={"🖥️"} label={"technologies"} />
              <span className="flex flex-1 gap-1 flex-wrap items-center">
                {technologies}
              </span>
            </TimelineDataLine>
          )}
        </div>
      </div>
    </div>
  );
};

export default Workplace;

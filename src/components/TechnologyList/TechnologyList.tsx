import React, { FC } from "react";
import styles from "./TechnologyList.module.css";
import { WorkplaceDataItem } from "../../models/common";
import Badge from "../Badge/Badge";
import { DateTime, Duration } from "luxon";
import SubSectionHeader from "../SubSectionHeader/SubSectionHeader";

interface TechnologyListProps {
  workplaces: WorkplaceDataItem[];
}

const TechnologyList: FC<TechnologyListProps> = (props) => {
  const durations = new Map<string, Duration>();

  const allTechnologies: string[] = [];
  props.workplaces.forEach((workplace) => {
    if (workplace.technologies) {
      workplace.technologies.forEach((technology) => {
        const from = DateTime.fromISO(workplace.from);
        const to = workplace.to
          ? DateTime.fromISO(workplace.to)
          : DateTime.now();
        let currentDiff = to.diff(from, ["years"]);

        const previousDiff = durations.get(technology);

        if (previousDiff) {
          currentDiff = currentDiff?.plus(previousDiff);
        }

        durations.set(technology, currentDiff);
      });

      allTechnologies.push(...workplace.technologies);
    }
  });

  allTechnologies.sort(
    (a, b) => (durations.get(b)?.years || 0) - (durations.get(a)?.years || 0)
  );
  const unique = allTechnologies.filter(function (value, index, array) {
    return array.indexOf(value) === index;
  });

  const rendered = unique.map((item, index) => {
    const years = durations.get(item)?.years || 0;
    const roundedYears = Math.ceil(years / 0.5) * 0.5;
    return (
      <div className="flex" key={`t_${index}`}>
        <Badge half={true}>{item}</Badge>
        <div className="rounded-r px-2 text-sm flex items-center bg-slate-400 text-white ">
          {roundedYears}
        </div>
      </div>
    );
  });

  return (
    <div
      className={`${styles.TechnologyList} flex flex-col gap-2`}
      data-testid="TechnologyList"
    >
      <div>
        <SubSectionHeader title={"technologies"} />
      </div>
      <div className="flex flex-wrap gap-2">{rendered}</div>
    </div>
  );
};

export default TechnologyList;

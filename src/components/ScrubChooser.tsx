/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { ScrubState, ScrubType } from "./Sanitizer";

type ScrubChooserProps = {
	scrubItems: ScrubState;
	setScrubItems: (value: ScrubState) => void;
};

export const ScrubChooser: React.FC<ScrubChooserProps> = ({
	scrubItems,
	setScrubItems,
}) => {
	const handleCheckboxChange = (
		type: ScrubType,
		item: string,
		newVal: boolean,
	) => {
		console.log(type, item, newVal);
		const newScrubItems = { ...scrubItems };
		const newTypeItems = { ...newScrubItems[type] };
		newTypeItems[item] = newVal;
		newScrubItems[type] = newTypeItems;
		setScrubItems(newScrubItems);
	};

	return (
		<div className="space-y-4">
			{Object.entries(scrubItems).map(
				// @ts-ignore
				([key, items]: [ScrubType, Record<string, boolean>]) => {
					if (Object.keys(items).length === 0) return null;
					return (
						<div className="space-y-2">
							<h2>{key}</h2>
							<ul
								className="space-y-1 columns-1 md:columns-2 lg:columns-3 xl:columns-4"
								key={key}
							>
								{Object.entries(items).map(([item, val]: [string, boolean]) => {
									return (
										<li className="inline-block w-full" key={item}>
											<label className="inline-flex items-start gap-2 group">
												<input
													type="checkbox"
													className="w-4 h-4 mt-[.38em] group-hover:outline outline-offset-2 outline-2 shrink-0"
													name={item}
													checked={val}
													onChange={() => handleCheckboxChange(key, item, !val)}
												/>
												<span>{item}</span>
											</label>
										</li>
									);
								})}
							</ul>
						</div>
					);
				},
			)}
		</div>
	);
};

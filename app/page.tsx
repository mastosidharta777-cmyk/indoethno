import { ComingSoon } from '@/components/ComingSoon';
import { PilotHome } from '@/components/PilotHome';
import { isPilot } from '@/lib/site';

export default function Home() {
  return isPilot ? <PilotHome /> : <ComingSoon />;
}

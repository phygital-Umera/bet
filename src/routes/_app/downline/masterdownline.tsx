import {createFileRoute} from '@tanstack/react-router';
import MasterDownlineList from '../../../components/downline/MasterDownlineList';

export const Route = createFileRoute('/_app/downline/masterdownline')({
  component: MasterDownlineList,
});

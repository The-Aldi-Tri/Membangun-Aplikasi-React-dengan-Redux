import ProtectedLayout from '../Layouts/ProtectedLayout';
import NewThreadForm from '../components/NewThreadForm';

const NewThreadPage = () => {
  return (
    <ProtectedLayout>
      <NewThreadForm />
    </ProtectedLayout>
  );
};

export default NewThreadPage;
